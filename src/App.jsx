import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import ContentProvider from "./components/ContentProvider.jsx";
import Home from './components/Home.jsx';


/**
 * The root component of the web application, also defining Routes of the application.
 * @author - Liyang
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="bubble-sort" element={<ContentProvider sortType="bubbleSort" />} />
                <Route path="insertion-sort" element={<ContentProvider sortType="insertionSort" />} />
                <Route path="selection-sort" element={<ContentProvider sortType="selectionSort" />} />
                <Route path="quick-sort" element={<ContentProvider sortType="quickSort" />} />
                <Route path="merge-sort" element={<ContentProvider sortType="mergeSort" />} />
                <Route path="heap-sort" element={<ContentProvider sortType="heapSort" />} />
            </Routes>
        </BrowserRouter>
    )
}

