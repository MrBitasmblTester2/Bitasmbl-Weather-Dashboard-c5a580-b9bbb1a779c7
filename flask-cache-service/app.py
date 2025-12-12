from flask import Flask,request,jsonify
app=Flask(__name__)
cache={}
@app.route('/proxy/weather')
def proxy():
 return jsonify({})

if __name__=='__main__':
 app.run()
