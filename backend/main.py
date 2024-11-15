from flask import request, jsonify
from config import app, db
from models import Chainsaws

#get chainsaws (added filter functionality)
@app.route("/api/chainsaws", methods=['GET'])
def get_chainsaws():
    color = request.args.get('color')
    brand = request.args.get('brand')

    query = Chainsaws.query

    if color:
        query = query.filter_by(color=color)
    if brand:
        query = query.filter_by(brand=brand)

    chainsaws = query.all()
    json_chainsaws = [chainsaw.to_json() for chainsaw in chainsaws]
    return jsonify(json_chainsaws)

#get chainsaw by ID
@app.route("/api/chainsaws/<int:id>", methods=["GET"])
def get_chainsaw(id):
    chainsaw = Chainsaws.query.get(id)
    if chainsaw is None:
        return jsonify({"message": "Chainsaw not found"}), 404

    return jsonify({
        "name": chainsaw.name,
        "watts": chainsaw.watts,
        "rotationsPerMinute": chainsaw.rpm,
        "imgUrl": chainsaw.url,
        "price": chainsaw.price,
        "brand": chainsaw.brand,
        "color": chainsaw.color
    }), 200

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


    if not all([name, watts, rpm, url, price, brand, color]):
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