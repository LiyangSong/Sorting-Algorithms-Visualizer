import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header.js'
import ContentProvider from "./ContentProvider.js";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="bubble-sort" element={<ContentProvider sortType="bubbleSort" />} />
                    <Route path="insertion-sort" element={<ContentProvider sortType="insertionSort" />} />
                    <Route path="selection-sort" element={<ContentProvider sortType="selectionSort" />} />
                    <Route path="quick-sort" element={<ContentProvider sortType="quickSort" />} />
                    <Route path="merge-sort" element={<ContentProvider sortType="mergeSort" />} />
                    <Route path="heap-sort" element={<ContentProvider sortType="heapSort" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {
    return(
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    )
}

