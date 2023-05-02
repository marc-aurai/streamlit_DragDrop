Streamlit component
Example:

> pip install streamlit-component-DragDrop </br>


<code>
import streamlit as st </br>
from st_dragdrop_list import ST_DragDropList </br>

st.title("Streamlit DragDropList")

data = [</br>
    {"id": "element_1", "order": 0, "name": "Test regel 1"}, </br>
    {"id": "element_2", "order": 1, "name": "Test regel 2"}, </br>
    {"id": "element_3", "order": 2, "name": "Test regel 3"}, </br>
]

st_list = ST_DragDropList(data, key="my_list") </br>
elements = [element['name'] for element in st_list] </br>
st.write(elements)
</code>