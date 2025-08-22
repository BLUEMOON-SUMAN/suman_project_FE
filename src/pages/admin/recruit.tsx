// import { useEffect, useState, useCallback } from 'react';

// // import { useRouter } from 'next/router';

// // import { useAuthStore } from '@/stores/useAuthStore';

// import {
//   fetchRecruitments,
//   createRecruitment,
//   updateRecruitment,
//   deleteRecruitment,
//   Recruitment,
//   CreateRecruitmentData,
//   UpdateRecruitmentData,
//   ApiError
// } from '@/lib/api/recruit';

// import AdminHeader from '@/components/AdminHeader';

// import { Users, Activity, Plus, RefreshCw, Eye, Edit3, Trash2, X, Calendar, FileText } from 'lucide-react';

// interface FormData {
//   title: string;
//   description: string;
// }

// export default function RecruitPage() {
//   // const router = useRouter();
//   // const { isLoggedIn, init } = useAuthStore();

//   // 상태 관리
//   const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
  
//   // 모달 상태
//   const [selected, setSelected] = useState<Recruitment | null>(null);
//   const [editMode, setEditMode] = useState(false);
//   const [createModalOpen, setCreateModalOpen] = useState(false);
  
//   // 폼 데이터
//   const [editData, setEditData] = useState<FormData>({ title: '', description: '' });
//   const [newData, setNewData] = useState<FormData>({ title: '', description: '' });

//   // 인증 체크
//   // useEffect(() => {
//   //   init();
//   // }, [init]);

//   // useEffect(() => {
//   //   if (!isLoggedIn) {
//   //     router.replace('/admin/login');
//   //   }
//   // }, [isLoggedIn, router]);

//   // useEffect(() => {
//   //   if (isLoggedIn) {
//   //     loadRecruitments();
//   //   }
//   // }, [isLoggedIn]);

//   // 에러 처리 헬퍼
//   const handleError = useCallback((error: unknown, fallbackMessage: string) => {
//     if (error && typeof error === 'object' && 'message' in error) {
//       const apiError = error as ApiError;
//       setError(apiError.message);
//       return apiError.message;
//     }
//     setError(fallbackMessage);
//     return fallbackMessage;
//   }, []);

//   // 성공 메시지 표시 후 에러 상태 클리어
//   const showSuccessMessage = useCallback((message: string) => {
//     alert(message);
//     setError(null);
//   }, []);

//   // 채용공고 목록 불러오기
//   const loadRecruitments = useCallback(async () => {
//     setLoading(true);
//     try {
//       const data = await fetchRecruitments();
//       setRecruitments(data);
//       setError(null);
//     } catch (err) {
//       handleError(err, '채용공고 목록을 불러오는데 실패했습니다.');
//     } finally {
//       setLoading(false);
//     }
//   }, [handleError]);

//   // 입력값 검증
//   const validateForm = (data: FormData): boolean => {
//     if (!data.title.trim()) {
//       alert('제목을 입력해주세요.');
//       return false;
//     }
//     if (!data.description.trim()) {
//       alert('내용을 입력해주세요.');
//       return false;
//     }
//     return true;
//   };

//   // 새 공고 생성
//   const handleCreateSubmit = async () => {
//     if (!validateForm(newData)) return;

//     setLoading(true);
//     try {
//       const createData: CreateRecruitmentData = {
//         title: newData.title.trim(),
//         content: newData.description.trim()
//       };
      
//       await createRecruitment(createData);
//       showSuccessMessage('채용공고가 성공적으로 등록되었습니다.');
//       closeCreateModal();
//       await loadRecruitments();
//     } catch (err) {
//       const errorMessage = handleError(err, '채용공고 등록에 실패했습니다.');
//       alert(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 공고 수정
//   const handleEditSubmit = async () => {
//     if (!selected || !validateForm(editData)) return;

//     setLoading(true);
//     try {
//       const updateData: UpdateRecruitmentData = {
//         title: editData.title.trim(),
//         content: editData.description.trim()
//       };
      
//       await updateRecruitment(selected.id, updateData);
//       showSuccessMessage('채용공고가 성공적으로 수정되었습니다.');
//       closeModal();
//       await loadRecruitments();
//     } catch (err) {
//       const errorMessage = handleError(err, '채용공고 수정에 실패했습니다.');
//       alert(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 공고 삭제
//   const handleDelete = async (id: number) => {
//     if (!confirm('정말로 이 채용공고를 삭제하시겠습니까?\n삭제된 공고는 복구할 수 없습니다.')) {
//       return;
//     }

//     setLoading(true);
//     try {
//       await deleteRecruitment(id);
//       showSuccessMessage('채용공고가 성공적으로 삭제되었습니다.');
//       await loadRecruitments();
//     } catch (err) {
//       const errorMessage = handleError(err, '채용공고 삭제에 실패했습니다.');
//       alert(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 상세보기/수정 모달 열기
//   const handleView = (item: Recruitment, edit = false) => {
//     setSelected(item);
//     setEditMode(edit);
//     setEditData({ title: item.title, description: item.description });
//   };

//   // 모달 닫기
//   const closeModal = () => {
//     setSelected(null);
//     setEditMode(false);
//     setEditData({ title: '', description: '' });
//   };

//   // 새 공고 모달 닫기
//   const closeCreateModal = () => {
//     setCreateModalOpen(false);
//     setNewData({ title: '', description: '' });
//   };

//   // 새로고침
//   const handleRefresh = () => {
//     loadRecruitments();
//   };

//   // 페이지 접속시 GET요청
//   useEffect(() => {
//     loadRecruitments();
//   }, [loadRecruitments]);

//   // if (!isLoggedIn) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <AdminHeader />
      
//       <div className="p-8 max-w-7xl mx-auto">
//         {/* 페이지 헤더 */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex items-center space-x-4">
//             <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
//               <Users className="h-8 w-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-white">채용공고 관리</h1>
//               <p className="text-slate-300 mt-1">채용 공고를 효율적으로 관리하세요</p>
//             </div>
//           </div>
//           <button
//             onClick={handleRefresh}
//             disabled={loading}
//             className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-xl hover:bg-slate-600/50 disabled:opacity-50 transition-all duration-200 border border-slate-600/50 backdrop-blur-sm"
//           >
//             <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
//             <span>새로고침</span>
//           </button>
//         </div>

//         {/* 액션 버튼 */}
//         <div className="mb-8">
//           <button
//             onClick={() => setCreateModalOpen(true)}
//             disabled={loading}
//             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 tra
