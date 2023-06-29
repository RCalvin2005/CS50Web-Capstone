from django.urls import path
from . import views

app_name = "token"
urlpatterns = [
    path("", views.get_routes, name="get_routes"),
]
