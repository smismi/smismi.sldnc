from django.shortcuts import render_to_response
from django.template import RequestContext
from catalog.models import *
from django.http import Http404


def index(request):
    return render_to_response('project/index.html', RequestContext(request))


def company(request):
    return render_to_response('project/company.html', RequestContext(request))


def catalog(request, pcat=None, psubcat=None):
    categories = Category.objects.all().order_by('ordering')
    subcategories = Subcategory.objects.all().order_by('ordering')

    try:
        if not pcat:
            current_category = categories[0]
            current_subcategory = None
            products = Product.objects.filter(subcategory__category=current_category).order_by('ordering')
            product_subcategories = Subcategory.objects.filter(category=current_category)
        elif pcat and not psubcat:
            current_category = Category.objects.get(id=pcat)
            current_subcategory = None
            products = Product.objects.filter(subcategory__category=current_category).order_by('ordering')
            product_subcategories = Subcategory.objects.filter(category=current_category)
        else:
            current_category = Category.objects.get(id=pcat)
            current_subcategory = Subcategory.objects.get(id=psubcat)
            products = Product.objects.filter(subcategory__category=current_category).order_by('ordering')
            product_subcategories = Subcategory.objects.filter(category=current_category)
    except Category.DoesNotExist, Subcategory.DoesNotExist:
        raise Http404

    products_data = []
    for product in products:
        properties = Property.objects.filter(product=product).order_by('ordering')
        products_data.append({
            'product': product,
            'properties': properties,
        })

    return render_to_response('project/catalog.html', {
        'categories': categories,
        'subcategories': subcategories,
        'current_category': current_category,
        'current_subcategory': current_subcategory,
        'products': products_data,
        'product_subcategories': product_subcategories,
    }, RequestContext(request))