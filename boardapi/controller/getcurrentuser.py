from flask import Blueprint, session

getuser_bp = Blueprint('getuser', __name__, url_prefix='/username')


@getuser_bp.route('', methods=['GET'])
def get_current_username():
    username = session['username']

    return {
        "username": username
    }
