import React from 'react';
import  {Navigate}  from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import MainLayout from './layouts/MainLayout';
import Livres from './views/Livres/Livre'
import Auteurs from './views/Auteurs/Auteur';
import DashboardView from './views/Dashboard/DashboardView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import Editeurs from './views/Editeurs/Editeur';
import RegisterView from './views/auth/RegisterView';
import Populaires from './views/Populaires/populaire';
import Commentaires from './views/Commentaires/commentaire';
import Utilisateurs from './views/Utilisateurs/utilisateur';
import Categories from './views/Categories/categorie'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'Livres', element: <Livres/> },
      { path: 'Auteurs', element: <Auteurs /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'Editeurs', element: <Editeurs /> },
      { path: 'Populaires', element: <Populaires /> },
      { path: 'Commentaires', element: <Commentaires /> },
      { path:'Utilisateurs',element:<Utilisateurs />},
      { path:'Categories',element:<Categories/>},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
