from django.db import models
import uuid

class TodoModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=250)
    content = models.TextField(max_length=10000)
    status = models.CharField(max_length=5)

    def __str__(self):
        return self.title