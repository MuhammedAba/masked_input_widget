{
    'name': 'Masked Input Widget',
    'version': '16.0.1.0.0',
    'category': 'Widgets',
    'summary': 'Custom Masked Input Widget for Odoo',
    'description': """
        This module provides a custom Masked Input widget for Odoo.
        It masks input values, showing only the first two and last two characters, 
        while saving the actual value to the database.
    """,
    'author': 'Muhammed Aba',
    'depends': ['web'],

    'assets': {
        'web.assets_backend': [
            'masked_input_widget/static/src/js/masked_given_input.js',
            'masked_input_widget/static/src/xml/masked_given_input_template.xml',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
