from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from restaurant.models import MenuItem, Booking
from rest_framework import status
from datetime import datetime
from django.utils import timezone


class BookingViewTest(TestCase):
    def setUp(self):
        # Set up test data
        self.client = APIClient()
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.client.force_authenticate(user=self.user)

        # Create a booking for the authenticated user
        self.booking = Booking.objects.create(
            name="John Doe",
            no_of_guests=4,
            booking_date=timezone.now(),  # Use timezone-aware datetime
            user=self.user,
        )

    def test_get_user_booking(self):
        # Test retrieving the booking for the logged-in user
        response = self.client.get(reverse("booking-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], "John Doe")
        self.assertEqual(response.data[0]["no_of_guests"], 4)

    def test_admin_can_view_all_bookings(self):
        # Test that an admin can view all bookings
        admin_user = User.objects.create_superuser(
            username="admin", password="adminpass"
        )
        self.client.force_authenticate(user=admin_user)
        response = self.client.get(reverse("booking-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), Booking.objects.count())


def test_user_cannot_view_other_bookings(self):
    # Create another user with a booking
    another_user = User.objects.create_user(username="otheruser", password="otherpass")
    Booking.objects.create(
        name="Jane Doe",
        no_of_guests=2,
        booking_date=timezone.now(),
        user=another_user,
    )

    # Authenticate as the first user (testuser)
    self.client.force_authenticate(user=self.user)

    # Make the request
    response = self.client.get(reverse("booking-list"))

    # Print the response data for debugging
    print("Response Data:", response.data)

    # Assert that access is forbidden
    self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
