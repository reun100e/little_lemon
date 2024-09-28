from django.test import TestCase
from django.contrib.auth.models import User
from restaurant.models import MenuItem, Booking
from datetime import datetime
from django.utils import timezone

aware_datetime = timezone.now()


class MenuItemTest(TestCase):
    def setUp(self):
        # Set up test data for MenuItem
        self.menu_item = MenuItem.objects.create(
            title="Pizza", price=9.99, inventory=10
        )

    def test_menu_item_str(self):
        # Test string representation of MenuItem
        self.assertEqual(str(self.menu_item), "Pizza : 9.99")


class BookingTest(TestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(username="testuser", password="testpass")

        # Create a booking for the test user
        self.booking = Booking.objects.create(
            name="John Doe",
            no_of_guests=4,
            booking_date=datetime(
                2023, 9, 25, 19, 30
            ),  # year, month, day, hour, minute
            user=self.user,
        )

    def test_booking_str(self):
        # Test string representation of Booking
        expected_str = "Booking by John Doe for 4 guests on 2023-09-25 19:30:00"
        self.assertEqual(str(self.booking), expected_str)

    def test_booking_user_relation(self):
        # Test that the booking is linked to the correct user
        self.assertEqual(self.booking.user.username, "testuser")
