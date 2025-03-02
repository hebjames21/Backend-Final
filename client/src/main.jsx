import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// filepath: /c:/Users/hebja/Desktop/persevereCode/backendGoodness/Backend-Final/server/models/ToDo.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
  todo: String,
  created: Number,
});

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;
