import React from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';
import './App.css'
import Header from './Header.js'
import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from "./algorithms/InsertionSort";
import SelectionSort from "./algorithms/SelectionSort";
import QuickSort from "./algorithms/QuickSort";
import MergeSort from "./algorithms/MergeSort";
import HeapSort from "./algorithms/HeapSort";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='bubble-sort' element={<BubbleSort />} />
                    <Route path='insertion-sort' element={<InsertionSort />} />
                    <Route path='selection-sort' element={<SelectionSort />} />
                    <Route path='quick-sort' element={<QuickSort />} />
                    <Route path='merge-sort' element={<MergeSort />} />
                    <Route path='heap-sort' element={<HeapSort />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout(){
    return(
        <div>
            {<Header />}
            <hr />
            <Outlet />
        </div>
    )
}

