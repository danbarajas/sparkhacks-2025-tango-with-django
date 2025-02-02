from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=15)
    notes = models.TextField()

    class Meta:
        ordering = ["title"]
