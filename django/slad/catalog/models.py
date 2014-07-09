from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    wrapper_class = models.CharField(max_length=20)
    ordering = models.IntegerField()

    def __unicode__(self):
        return '{name: %s, ordering: %s}' % (self.name, self.ordering)


class Subcategory(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category)
    description = models.TextField(default=None, null=True)
    ordering = models.IntegerField()

    def __unicode__(self):
        return '{name: %s, category: %s, ordering: %s}' % (self.name, self.category, self.ordering)


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    expiration = models.CharField(max_length=25)
    novelty = models.BooleanField()
    subcategory = models.ForeignKey(Subcategory)
    ordering = models.IntegerField()
    small_img = models.ImageField(upload_to='catalog/small/')
    big_img = models.ImageField(upload_to='catalog/big/')
    doubled = models.BooleanField(default=False)

    def __unicode__(self):
        return '{name: %s, description: %s, expiration: %s, novelty: %s, subcategory: %s, ordering: %s}' % \
               (self.name, self.description, self.expiration, self.novelty, self.subcategory, self.ordering)


class Property(models.Model):
    weight_packing = models.CharField(max_length=10)
    amount = models.IntegerField()
    weight_boxes = models.CharField(max_length=10)
    product = models.ForeignKey(Product)
    ordering = models.IntegerField()

    def __unicode__(self):
        return '{weight_packing: %s, amount: %s, weight_boxes: %s, product: %s, ordering: %s}' % \
               (self.weight_packing, self.amount, self.weight_boxes, self.product, self.ordering)