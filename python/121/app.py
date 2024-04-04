class Employee:
    # pass

    _raise_percent = 1.1

    def __init__(self, first, last, department='Janitorial', salary=35000):
        # self._first = first
        self.set_first(first)
        self._last = last
        self._department = department
        self._salary = salary

    def print(self):
        print(f'first: {self._first} last: {self._last} dept: {
              self._department}, salary: {self._salary}')

    def __str__(self):
        return f'first: {self._first} last: {self._last} dept: {self._department} salary: {self._salary}'

    def __repr__(self):
        return f"Employee('{self._first}', '{self._last}', '{self._department}' , '{self._salary}')"

    def give_raise(self):
        # self._salary *= 1.1
        # self._salary *= Employee._raise_percent
        self._salary *= self._raise_percent

    def get_first(self):
        return self._first

    def set_first(self, first):
        if first == 'Joe':
            raise Exception('No Joes allowed')
        self._first = first

    @classmethod
    def set_raise_percent(cls, percent):
        cls._raise_percent = percent

    @staticmethod
    def get_departments():
        return ('Janitorial', 'Sales', 'Management')


joe = Employee('xJoe', 'Biden')
print(joe)

# joe.first = 'Joe'

print(joe._first, joe._last)
joe.print()

people = [joe]
print(people)

# it = Employee('Joe', 'Biden')
# print(it)

kamala = Employee('Kamala', 'Harris', salary=25000)
print(kamala)

# kamala.set_first('Joe')

people.append(kamala)

kamala._raise_percent = 2
# Employee._raise_percent = 1.5
Employee.set_raise_percent(1.5)

for person in people:
    person.give_raise()

print(people)

print(Employee.get_departments())


class Developer(Employee):
    # pass
    def __init__(self, first, last, department='Engineering', salary=135000, languages=()):
        super().__init__(first, last, department, salary)
        self._languages = languages

    def __str__(self):
        ret_val = super().__str__()
        ret_val += f' languages: {self._languages}'
        return ret_val

    def __repr__(self):
        return f"Developer('{self._first}', '{self._last}', '{self._department}' , '{self._salary}', '{self._languages})"


elon = Developer('Elon', 'Musk', languages=('Python', 'C'))
elon.give_raise()
print(elon)

people.append(elon)

print(people)


class NotAnEmployee:
    pass

foo = NotAnEmployee()
foo._first = 'foo'
foo._last = 'bar'
foo._department = 'foobar'
foo._salary = 123

Employee.print(foo)
