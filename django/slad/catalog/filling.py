# -*- coding: utf-8 -*-
from models import *
from os.path import dirname, join, abspath
import xlrd


CATEGORIES = [
    {
        'name': u'Фабрика конфет и шоколада',
        'wrapper_class': u'choko',
        'subcategories': [
            {u'Инновационные конфеты': u'Наша гордость — сладости, не имеющие аналогов на мировом рынке. Впервые в России мы представили конфеты из маршмеллоу, взбитого шоколадного мусса, детской молочной смеси, заварное пралине, суфле из йогуртов и многое другое, о чем еще вчера никто даже не мечтал.'},
            {u'Сложные конфеты': u'Необыкновенные сочетания ингредиентов, нестандартные начинки в шелковистом шоколаде не оставят равнодушными даже самых искушенных сладкоежек.'},
            {u'Помадная классика': u'Нежнейшая текстура и высокое (до 40%) содержание натурального сгущенного молока сделали помадные конфеты абсолютными лидерами продаж.'},
            {u'Помадные конфеты': u'Нежнейшая текстура и высокое (до 40%) содержание натурального сгущенного молока сделали помадные конфеты абсолютными лидерами продаж.'},
            {u'Желейные конфеты': u'Лакомство, полезное для обмена веществ. Широчайший выбор: свежесть фруктов или нежность молока и сливок, чистые оттенки вкуса или нотка шоколадной глазури, а также экстракт чая и апельсиновое масло.'},
            {u'Молочно-белковые конфеты': u'Сбитые белки с молочно-паточным сиропом превращаются в волшебно  мягкие конфеты,  которые порадуют вас легкими, утонченными вкусами.'},
            {u'Конфеты с мягкой карамелью (Тоффи)': u'Конфеты нового поколения, не похожие ни на одну из привычных сладостей из-за своей необычайной мягкости и пластичности.'},
            {u'Сбивные конфеты': u'Невесомые взбитые белки в сочетании с натуральным сгущенным молоком, покрытые шоколадной глазурью.'},
            {u'Суфлейные конфеты': u'Тающее суфле в виде конфет, в основе которого — творог, ваниль, молоко, натуральный кофе или какао-масло.'},
            {u'Шоколадные конфеты корпусные': u'Шоколадные конфеты удивляют многообразием начинок: сливочный, фруктовый или шоколадный крем, ореховая паста, коньяк, виски или алкогольные ликеры, пикантные пряности и многое другое.'},
            {u'Пралиновая классика': u'Какао-продукты, измельченные до микро-частиц с отборными орехами — фундуком, миндалем, кешью — или вафельной крошкой.'},
            {u'Пралиновые конфеты': u'Какао-продукты, измельченные до микро-частиц с отборными орехами — фундуком, миндалем, кешью — или вафельной крошкой.'},
            {u'Наборы конфет': u'Ассорти самых популярных вкусов корпусных конфет из темного шоколада с начинками из сливочного, шоколадного или кофейного крема.'},
            {u'Шоколад': u''},
        ],
    },
    {
        'name': u'Фабрика сладостей',
        'wrapper_class': u'sladosti',
        'subcategories': [
            {u'Зефир': u'Зефир «Сладуница» получил признание во всех регионах России. По мнению дистрибьюторов, является лучшим выбором  для потребителей.'},
            {u'Мармелад': u'Сочность фруктов и польза природных компонентов, соединенных в классическом лакомстве.'},
            {u'Печенье сдобное': u'Сдобное печенье благодаря тщательно выверенной рецептуре хранит вкус и аромат свежей домашней выпечки.'},
            {u'Пряники': u'Секреты традиционной русской выпечки делают наши пряники  особенно мягкими. Медовые, пряные, шоколадные, фруктовые, лимонные пряники  -  в совершенном исполнении.'},
            {u'Десерты': u'Творческий подход к сочетаниям вкусов и неординарный  выбор ингредиентов помогли нам создать восхитительные лакомства!'},
        ],
    },
    {
        'name': u'Фабрика инновационных конфет',
        'wrapper_class': u'nua',
        'subcategories': [
            {u'NUA VITA': u''},
            {u'NUA MULTI-MILK': u''},
            {u'NUA AIR': u''},
        ],
    }
]


def fill_category():
    for sctn in CATEGORIES:
        category_name = sctn['name']
        wrapper_class = sctn['wrapper_class']
        category = Category(
            name=category_name,
            wrapper_class=wrapper_class,
            ordering=len(Category.objects.all()) + 1
        )
        category.save()
        for sbctgr in sctn['subcategories']:
            subcategory_name = ''
            description = ''
            for key in sbctgr.keys():
                subcategory_name = key
                description = sbctgr[key]
            subcategory = Subcategory(
                name=subcategory_name,
                category=category,
                description=description,
                ordering=len(Subcategory.objects.filter(category=category)) + 1
            )
            subcategory.save()


def fill_catalog():
    excel_file = join(abspath(dirname(__file__)), 'catalog_excel.xlsx').replace('\\', '/')
    sheet = xlrd.open_workbook(excel_file).sheet_by_index(0)
    for rn in range(sheet.nrows):
        row = sheet.row_values(rn)

        product_name = row[0].strip()
        symbol_index = product_name.find('(')
        if symbol_index != -1:
            product_name = product_name[:symbol_index].strip()

        img_name = row[2] + '.png'
        cid = int(row[3])
        scid = int(row[4])
        subcategory = Subcategory.objects.get(
            id=scid + len(Subcategory.objects.filter(category__id__lt=cid)),
            category=Category.objects.get(id=cid)
        )
        description_name = row[5]

        try:
            expiration = int(row[7])
        except UnicodeEncodeError:
            expiration = row[7]

        novelty = int(row[8])

        small_img = 'catalog/small/' + img_name
        big_img = 'catalog/big/' + img_name

        product = Product(
            name=product_name,
            description=description_name,
            expiration=expiration,
            novelty=novelty,
            subcategory=subcategory,
            ordering=len(Product.objects.filter(subcategory=subcategory)) + 1,
            small_img=small_img,
            big_img=big_img,
        )
        product.save()

        property_str = str(row[6]).split(';')
        for pr in property_str:
            pr = str(pr).split('/')
            weight_packing = unicode(pr[0].strip())

            try:
                amount = int(pr[1])
            except ValueError:
                amount = 1

            weight_boxes = unicode(pr[2].strip())

            product_property = Property(
                weight_packing=weight_packing,
                amount=amount,
                weight_boxes=weight_boxes,
                product=product,
                ordering=len(Property.objects.filter(product=product)) + 1
            )
            product_property.save()