from selenium import webdriver
import requests

# from app import Employee

# bill = Employee('Bill', 'Gates')
# bill.print()

# response = requests.get('https://pypi.org/search/?q=http')

# print(response.status_code)

# print(response.content)


from bs4 import BeautifulSoup

r = requests.get('https://github.com/slubowsky-course/')

soup = BeautifulSoup(r.content, 'html.parser')
# print(soup.prettify())

the_div = soup.find('div', class_='js-pinned-items-reorder-container')
# print(the_div)

repos = the_div.find_all('p', class_='pinned-item-desc')

print(repos)


driver = webdriver.Edge()

driver.get('https://github.com/slubowsky-course/')
