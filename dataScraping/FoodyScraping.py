from requests_html import HTMLSession
from dataScraping.DTO.Ingredient import Ingredient
from dataScraping.DTO.Recipe import Recipe

session = HTMLSession()
response = session.get(
    'https://foody.co.il/foody_recipe/%d7%9c%d7%91%d7%99%d7%91%d7%95%d7%aa-%d7%91-10-%d7%93%d7%a7%d7%95%d7%aa-%d7%9e%d7%9b%d7%9c-%d7%9e%d7%94-%d7%a9%d7%99%d7%a9-%d7%91%d7%9e%d7%a7%d7%a8%d7%a8-%d7%92%d7%9d-%d7%97%d7%a1%d7%9b%d7%95%d7%a0/')

recipe = Recipe()
article = response.html.find('article', first=True)
recipe.name = article.find('h1', first=True).text
recipe.description = article.find('.description', first=True).text

recipe.preparationTime = article.find('.preparation_time', first=True).text
recipe.totalTime = article.find('.total_time', first=True).text
recipe.difficulty = article.find('.difficulty_level', first=True).text
recipe.numberOfIngredients = article.find('.ingredients_count', first=True).text
recipe.pageImg = article.find('.preview figure img', first=True).attrs['src']

# get ingredients
ingredientsContainer = article.find('.recipe-ingredients-container', first=True)
ingredientsData = []
ingredients = ingredientsContainer.find('.ingredients')
for ingredient in ingredients:
    ingredientData = Ingredient()
    ingredientData.name = ingredient.find('.name', first=True).text
    ingredientData.quantity = ingredient.find('.amount', first=True).text
    ingredientsData.append(ingredientData)
recipe.ingredients = ingredientsData

# TODO
recipe.preparationMethod = []
recipe.notes = []
recipe.url = ''

recipe.numberOfServings = article.find('.amount-container', first=True).find('input', first=True).attrs['value']
recipe.profileImg = article.find('.featured-content-container img', first=True).attrs['src']


# print(ingredient.quantity)
print()
# print(article.html)
