import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const loaction = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // 로그인 상태로 변경
        setIsLogin(true);
        if (location.pathname === '/login') {
          navigate('/');
        }
      } else {
        // 로그아웃 상태로 변경
        if (location.pathname !== '/signup') {
          navigate('/login');
        }
        setIsLogin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
