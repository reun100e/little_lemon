from django.contrib.auth.models import User
from django.db import models


class MenuItem(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    inventory = models.IntegerField()

    def __str__(self):
        return f"{self.title} : {str(self.price)}"


class Booking(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    no_of_guests = models.IntegerField()
    booking_date = models.DateTimeField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="bookings"
    )  # Link to the user who made the booking

    def __str__(self):
        return f"Booking by {self.name} for {self.no_of_guests} guests on {self.booking_date}"
