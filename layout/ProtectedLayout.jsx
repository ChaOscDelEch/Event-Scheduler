import { use } from 'react';
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthProvider";

function ProtextedLayout() {
    const { user, loading} =
}