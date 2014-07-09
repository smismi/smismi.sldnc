import os


DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    ('Denis Shipov', 'shipovdenis@icloud.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'slad',
        'USER': 'slad',
        'PASSWORD': 'Kmfn54Ew36nUrit',
        'HOST': 'localhost',
        'PORT': '',
    }
}

ALLOWED_HOSTS = []

TIME_ZONE = 'America/Chicago'

LANGUAGE_CODE = 'en-us'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

USE_TZ = True

MEDIA_ROOT = os.path.join(os.path.dirname(__file__), '..', 'media').replace('\\', '/')

MEDIA_URL = '/media/'

STATIC_ROOT = ''

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(os.path.dirname(__file__), '..', 'static').replace('\\', '/'),
)

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

SECRET_KEY = '^0_bjla)#%hq11de^js!$f#85oa_cytx0j0m@s#e7b6vil^$c1'

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

ROOT_URLCONF = 'slad.urls'

WSGI_APPLICATION = 'slad.wsgi.application'

TEMPLATE_DIRS = (
    os.path.join(os.path.dirname(__file__), '..', 'templates').replace('\\', '/'),
    os.path.join(os.path.dirname(__file__), '..', 'administration', 'templates').replace('\\', '/'),
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'project',
    'catalog',
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

try:
    from slad.local_settings import *
except ImportError:
    pass