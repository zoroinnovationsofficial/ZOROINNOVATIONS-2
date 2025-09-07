import React from 'react';
import LoginArt from '../../components/admin-section/loginPage/LoginArt.jsx';
import LoginForm from '../../components/admin-section/loginPage/LoginForm.jsx';
import Footer from '../../components/admin-section/loginPage/LoginFooter.jsx';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(122.01deg, #1E3A8A 0%, #3B82F6 50%, #FF6B35 100%)' }}>
      <header className="w-full bg-white flex items-center h-[56px] px-8 border-b border-gray-200">
        <img src="/ZORO_logo.png" alt="ZORO Logo" className="h-10" />
      </header>
      <div className="flex flex-1 min-h-[calc(100vh-56px-120px)] flex-col md:flex-row">
        <div className="flex items-center justify-center shadow-2xl md:w-[50vw] w-full md:max-w-[746px] md:h-[90vh] md:max-h-[900px] h-[350px] md:rounded-tr-[50px] md:rounded-br-[50px] rounded-b-[40px] md:rounded-bl-none rounded-bl-[0] mx-auto my-auto transition-all duration-300" style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px', background: 'linear-gradient(180deg, #F06C43 0%, #B5747E 49.6%, #4182F1 100%)' }}>
          <LoginArt />
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-1/2 min-h-full">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


