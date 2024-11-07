from config import db

class Chainsaws(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=False)
    watts = db.Column(db.Integer, unique=False, nullable=False)
    rpm = db.Column(db.Integer, unique=False, nullable=False)
    url = db.Column(db.String(255), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    color = db.Column(db.String(255), unique=False, nullable=False)
    brand = db.Column(db.String(255), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "watts": self.watts,
            "rotationsPerMinute": self.rpm,
            "imgUrl": self.url,
            "price": self.price,
            "color": self.color,
            "brand": self.brand,
        }
