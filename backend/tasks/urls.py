from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_tasks),
    path("<int:task_id>/", views.get_task),
    path("create/", views.create_task),
    path("edit/<int:task_id>/", views.edit_task),
    path("delete/<int:task_id>/", views.delete_task),
]