from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserRegisterForm(UserCreationForm):
    # if you want users to have an email field, remove the comment
    # email = forms.EmailField()
    class Meta:
        model = User
        fields = [
            'username',
            # 'email',
            'password1',
            'password2'
        ]