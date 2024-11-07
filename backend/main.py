from flask import request, jsonify
from config import app, db
from models import Chainsaws

@app.route("/api/chainsaws", methods=['GET'])
def get_chainsaws():
    chainsaws = Chainsaws.query.all()
    json_chainsaws = list(map(lambda x: x.to_json(), chainsaws))
    return jsonify(json_chainsaws)

@app.route("/api/chainsaws", methods=['POST'])
def create_chainsaw():
    json_data = request.get_json()
    print(json_data)
    name = request.json.get("name")
    watts = request.json.get("watts")
    rpm = request.json.get("rotationsPerMinute")
    url = request.json.get("imgUrl")
    price = request.json.get("price")
    brand = request.json.get("brand")
    color = request.json.get("color")

    if not name or not watts or not rpm or not url or price or brand or not color:
        return jsonify({"message": "Missing parameters"}), 400

    new_chainsaw = Chainsaws(name=name, watts=watts, rpm=rpm, url=url, price=price, brand=brand, color=color)
    try:
        db.session.add(new_chainsaw)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "New chainsaw created"}), 201

@app.route('/api/chainsaws/<int:chainsaw_id>', methods=['PUT'])
def update_chainsaw(chainsaw_id):
    chainsaw = Chainsaws.query.get(chainsaw_id)

    if not chainsaw:
        return jsonify({"message": "Chainsaw not found"}), 404

    data = request.json
    chainsaw.name = data.get("name", chainsaw.name)
    chainsaw.watts = data.get("watts", chainsaw.watts)
    chainsaw.rpm = data.get("rotationsPerMinute", chainsaw.rpm)
    chainsaw.url = data.get("imgUrl", chainsaw.url)
    chainsaw.price = data.get("price", chainsaw.price)
    chainsaw.brand = data.get("brand", chainsaw.brand)
    chainsaw.color = data.get("color", chainsaw.color)

    db.session.commit()

    return jsonify({"message": "Updated chainsaw"}), 200

@app.route("/api/chainsaws/<int:chainsaw_id>", methods=['DELETE'])
def delete_chainsaw(chainsaw_id):
    chainsaw = Chainsaws.query.get(chainsaw_id)

    if not chainsaw:
        return jsonify({"message": "Chainsaw not found"}), 404

    db.session.delete(chainsaw)
    db.session.commit()

    return jsonify({"message": "Deleted chainsaw"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)