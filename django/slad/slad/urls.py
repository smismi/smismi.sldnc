from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'project.views.index', name='index'),
    url(r'^company$', 'project.views.company', name='company'),
    url(r'^catalog$', 'project.views.catalog', name='catalog'),
    url(r'^catalog/(\d+)$', 'project.views.catalog', name='catalog'),
    url(r'^catalog/(\d+)/(\d+)$', 'project.views.catalog', name='catalog'),
    url(r'^redis', include('administration.urls')),
)

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT})
    )