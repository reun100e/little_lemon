from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .models import Booking, MenuItem
from .serializers import BookingSerializer, MenuItemSerializer, UserSerializer
import logging

logger = logging.getLogger(__name__)


def index(request):
    return render(request, "index.html", {})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can access

    def get_queryset(self):
        user = self.request.user
        logger.debug(f"User: {user.username} - Is staff: {user.is_staff}")

        if user.is_staff:  # Admin user
            logger.debug("Admin user accessing all bookings.")
            return Booking.objects.all()  # Admin can view all bookings

        # Regular user can only see their own bookings
        user_bookings = Booking.objects.filter(user=user)
        logger.debug(
            f"Regular user accessing their bookings: {user_bookings.count()} found."
        )
        return user_bookings

    def perform_create(self, serializer):
        """Automatically assign the logged-in user as the 'user' of the booking."""
        serializer.save(user=self.request.user)


class MenuItemsView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]  # Allow anyone to access the list of menu items
        return [IsAuthenticated()]  # Require authentication for creating menu items


class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]  # Allow anyone to access a single menu item
        return [IsAuthenticated()]  # Require authentication for updates or deletions
