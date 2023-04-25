import { Routes, Route, redirect, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { Dish } from '../pages/Dish';

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  );
}
