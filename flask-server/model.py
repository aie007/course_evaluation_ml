# coursesModel.py

from google.colab import drive
drive.mount('/content/drive')
import numpy as np
import pandas as pd
import pandas as pd
df.info()
df.describe()
df.isnull().count()
df.shape
print(df['course_title'].unique())

df['student_of_CSE'] = list(
    map(lambda x: x.startswith('CS'), df['course_code']))

df1 = df[df['student_of_CSE'] == True]
df1.head()

df1["course_title"].unique()

print(df1["course_title"].value_counts().head(15))
df1.shape
df2.shape

df2["course_title"].value_counts()
df2.sample(5)

columns_to_drop = ['num_ratings', 'useful','num_reviews',"course_rating",'course_rating_int','student_of_CSE','easy','liked']
df2.drop(columns=columns_to_drop, inplace=True)

df2.sample(5)


# Roberta Pretrained Model from Hugging Face


!pip install transformers
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax
MODEL = f"cardiffnlp/twitter-roberta-base-sentiment"
tokenizer = AutoTokenizer.from_pretrained(MODEL)
def PolarityScoresRoberta(example,myid):
  encoded_text = tokenizer(example, return_tensors='pt')
  output = model(**encoded_text)
  scores = output[0][0].detach().numpy()
  scores = softmax(scores)
  scores_dict = {
      'ID' : myid,
      'Negetive' : scores[0],
      'Neutral' : scores[1],
      'Positive' : scores[2],
  }
  return scores_dict

df2['ID'] = df2.reset_index().index
df2.sample(7)

!pip install tqdm
from tqdm import tqdm
result = {}
for i, row in tqdm(df2.iterrows(), total=len(df2)):
  try:
    text = row['reviews']
    myid = row['ID']
    roberta_result = PolarityScoresRoberta(text,myid)
    result[myid] = roberta_result
  except RuntimeError:
    print("Broke for ID : ",myid)

res_df = pd.DataFrame(result).T
res_df.head()
res_df.drop(columns='ID', inplace=True)
res_df.head(20)

for i in range(0,477):
  max = res_df.max(axis=1)[i]
  if res_df.loc[i, 'Negetive'] == max:
    if max > 0.8:
      res_df.loc[i,'Classification'] = "Awful"
    else:
      res_df.loc[i,'Classification'] = "Poor"
  elif res_df.loc[i, 'Neutral'] == max:
    if res_df.loc[i, 'Negetive'] > 0.4:
      res_df.loc[i,'Classification'] = "Poor"
    elif res_df.loc[i, 'Positive'] > 0.4:
      res_df.loc[i,'Classification'] = "Good"
    else:
      res_df.loc[i,'Classification'] = "Average"
  else:
    if max > 0.8:
      res_df.loc[i,'Classification'] = "Awesome"
    else:
      res_df.loc[i,'Classification'] = "Good"

res_df.head()

# Facultymodel.py

from google.colab import drive
drive.mount('/content/drive')
import pandas as pd
from sklearn.model_selection import train_test_split
df = pd.read_csv("/content/drive/MyDrive/ML Training/Cars.csv")
 df.head()
df = pd.read_csv('/content/drive/MyDrive/Major_Project/feedback_student.csv', encoding = 'ISO-8859-1')
df.head()
print(df['Id'].unique())
print(df['quality'].unique())
faculty_1 = []
for value in df_1['comment']:
    faculty_1.append(value)
with open("projector.txt","w",encoding='utf8') as output:
    output.write(str(faculty_1))
print(faculty_1)
import os
os.getcwd()
ip_rev_string = re.sub("[^A-Za-z" "]+"," ", ip_rev_string).lower()
ip_rev_string = re.sub("[0-9" "]+"," ", ip_rev_string)


import matplotlib.pyplot as plt
#pip install wordcloud
from wordcloud import WordCloud
from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(ip_reviews_words)
with open("/content/drive/MyDrive/ML Training/stop.txt","r") as sw:
    stop_words = sw.read()
wordcloud_ip = WordCloud(
                      background_color='White',
                      width=1800,
                      height=1400
                     ).generate(ip_rev_string)

plt.imshow(wordcloud_ip)
y_1 = [0,0,0]
for val in df_1['quality']:
  if val == "good":
    y_1[0]+=1
  elif val == "poor":
    y_1[1]+=1
  else:
    y_1[2]+=1
x_1 = ["Good","Poor","Awful"]
clr = ["green","orange","red"]
# Create a bar chart from a DataFrame
plt.bar(x_1, y_1, color=clr)

# Show the bar chart
plt.show()
