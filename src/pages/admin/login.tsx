import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/useAuthStore';
import { loginUser } from '@/lib/api/auth';
import Image from 'next/image';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 백엔드 서버 슬립 방지용 깨우기 요청
  useEffect(() => {
  fetch("https://suman-project-31hc.onrender.com/api/")
    .then(() => console.log("Render 서버 깨우기 완료"))
    .catch(() => console.warn("Render 서버 깨우기 실패"));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  
   try {
      const { access, refresh } = await loginUser(username, password);
      login(access, refresh);
      alert('환영합니다 관리자님');
      router.replace('/admin/dashboard');
    } catch (error) {
      alert(error instanceof Error ? error.message : '로그인 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Image
                  src="/images/logo_suman.png"
                  alt="수만" 
                  width={100}
                  height={100}               
                  />
                <span className="text-lg font-bold text-white"></span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">수만 관리자 로그인</h1>
            <p className="text-white/70 text-sm">로그인이 안되면 새로고침 한번 해주세요.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디를 입력하세요"
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-white/50" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white/70 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                isLoading ? 'opacity-50 cursor-not-allowed transform-none' : ''
              }`}
            >
              {isLoading ? '기다려주세요...' : '로그인'}
            </button>
          </form>


        </div>

        {/* Decorative elements around card */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-50"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-30"></div>
      </div>
    </div>
  );
}
