from django.shortcuts import render

from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.contrib.auth.models import User

from .models import Booking, MenuItem
from .serializers import BookingSerializer, MenuItemSerializer, UserSerializer

# Create your views here.


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
        """
        Admins can see all bookings.
        Logged-in users can see only their own bookings.
        """
        user = self.request.user
        if user.is_staff:  # Admin user
            return Booking.objects.all()  # Admin can view all bookings
        else:
            return Booking.objects.filter(
                user=user
            )  # Regular user can only see their own bookings

    def get_permissions(self):
        """
        Customize permissions:
        - Only logged-in users can book tables (POST).
        - Admins can view all tables (GET).
        - Other users can only view their own bookings (GET).
        """
        if self.request.method == "GET":
            return [IsAuthenticated()]  # Allow logged-in users to view their bookings
        elif self.request.method == "POST":
            return [IsAuthenticated()]  # Allow any logged-in user to book a table
        return super().get_permissions()

    def perform_create(self, serializer):
        """
        Automatically assign the logged-in user as the 'user' of the booking.
        """
        serializer.save(user=self.request.user)


class MenuItemsView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        elif self.request.method == "POST":
            return [IsAuthenticated()]
        return super().get_permissions()


class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return [IsAuthenticated()]
