# ---------------------------------------------
# ---------------------------------------------
# Start Code ... 

# -------------------------
# import flask ... 
from flask import Flask, render_template, request, url_for

# mysql library ... 
from flask_mysqldb  import MySQL, cursors
# ---------------------------------------------
# ---------------------------------------------
import numpy as np
import os

from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model

filepath = 'model.h5'
model = load_model(filepath)
print(model)

print("Model Loaded Successfully")


def pred_tomato_dieas(tomato_plant):
    test_image = load_img(tomato_plant, target_size=(128, 128))  # load image
    print("@@ Got Image for prediction")

    test_image = img_to_array(test_image) / 255  # convert image to np array and normalize
    test_image = np.expand_dims(test_image, axis=0)  # change dimention 3D to 4D

    result = model.predict(test_image)  # predict diseased palnt or not
    print('@@ Raw result = ', result)

    pred = np.argmax(result, axis=1)
    print(pred)
    if pred == 0:
        return "Tomato - Bacteria Spot Disease", 'Tomato-Bacteria Spot.html'

    elif pred == 1:
        return "Tomato - Early Blight Disease", 'Tomato-Early_Blight.html'

    elif pred == 2:
        return "Tomato - Healthy and Fresh", 'Tomato-Healthy.html'

    elif pred == 3:
        return "Tomato - Late Blight Disease", 'Tomato - Late_blight.html'

    elif pred == 4:
        return "Tomato - Leaf Mold Disease", 'Tomato - Leaf_Mold.html'

    elif pred == 5:
        return "Tomato - Septoria Leaf Spot Disease", 'Tomato - Septoria_leaf_spot.html'

    elif pred == 6:
        return "Tomato - Target Spot Disease", 'Tomato - Target_Spot.html'

    elif pred == 7:
        return "Tomato - Tomoato Yellow Leaf Curl Virus Disease", 'Tomato - Tomato_Yellow_Leaf_Curl_Virus.html'
    elif pred == 8:
        return "Tomato - Tomato Mosaic Virus Disease", 'Tomato - Tomato_mosaic_virus.html'

    elif pred == 9:
        return "Tomato - Two Spotted Spider Mite Disease", 'Tomato - Two-spotted_spider_mite.html'

# ---------------------------------------------
# ---------------------------------------------
# ---------------------------------------------
# ---------------------------------------------

# get flask ... 
app = Flask(__name__)

# config mysql ... 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'plantsDB'

mysql = MySQL(app)

@app.route('/',methods=['GET','POST'])
# get the page ... 
def homePage():

    # check ... 
    if request.method == "POST":
        username = request.form['username'] 
        email = request.form['email'] 
        password = request.form['password']
        co_Password = request.form['co_Password']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO register (username,email,password,co_Password) VALUES (%s, %s, %s, %s)", (username,email,password,co_Password))
        
        mysql.connection.commit()
         
        cur.close()
        
        return render_template('home.html')
    
    return render_template('home.html') 

@app.route('/users')
def users(): 
    cur = mysql.connection.cursor()
    users = cur.execute("SELECT * FROM register")
    
    if users > 0:
        showUsers = cur.fetchall()
        return render_template('users.html',showUsers=showUsers)


# -------------------------------------------
# -------------------------------------------
@app.route('/login')
# get the page ... 
def loginForm():
    return render_template('login.html')


@app.route('/register')
# get the page ... 
def registerForm():
    return render_template('register.html')


@app.route('/contactUs')
# get the page ... 
def contactUs():
    return render_template('support.html')


@app.route('/catalog')
# get the page ... 
def catalog():
    return render_template('catalog.html')


@app.route('/homePage')
# get the page ... 
def home():
    return render_template('home.html')

@app.route('/aboutus')
# get the page ... 
def aboutus():
    return render_template('about.html')


@app.route('/mainProc')
# get the page ... 
def mainProc():
    return render_template('index.html')


@app.route('/weather')
# get the page ... 
def weather():
    return render_template('weather.html')



# # ---------------------------------------------------
# # ---------------------------------------------------


# get input image from client then predict class and render respective .html page for solution
@app.route("/predict", methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['image']  # fet input
        filename = file.filename
        print("@@ Input posted = ", filename)

        file_path = os.path.join(
            "C:\\upload",
            filename)
        file.save(file_path)

        print("@@ Predicting class......")
        pred, output_page = pred_tomato_dieas(tomato_plant=file_path)

        return render_template(output_page, pred_output=pred, user_image=file_path)



# # ------------------------------------------------------
# # ------------------------------------------------------
# # For local system & cloud
if __name__ == '__main__':
    app.debug = True
    app.run()


# # End  Code ... 
# -------------------------------------------------
# -------------------------------------------------