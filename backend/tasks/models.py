from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    notes = models.TextField()

    is_completed = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ["title"]
