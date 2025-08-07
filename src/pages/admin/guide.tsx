import React, { useState } from 'react';
import { Users, MessageSquare, HelpCircle, Settings, BarChart3, Activity, Book, ChevronDown, ChevronRight, Code, FileText, Globe, Database, Lock, Zap, LucideIcon } from 'lucide-react';
import AdminHeader from '@/components/AdminHeader';
import { withAdminAuth } from '@/components/WithAdminAuth';

// 섹션 컴포넌트
interface GuideSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function GuideSection({ title, icon: Icon, children, defaultOpen = false }: GuideSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-all duration-200 rounded-xl"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pl-16 text-slate-300 leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// 카드 컴포넌트
interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: "blue" | "green" | "purple" | "red" | "orange";
}

// 코드 블록 컴포넌트
interface CodeBlockProps {
  title: string;
  language: string;
  children: React.ReactNode;
}

function CodeBlock({ title, language, children }: CodeBlockProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-300">{title}</span>
          <span className="text-xs text-slate-400 uppercase">{language}</span>
        </div>
      </div>
      <div className="p-4">
        <pre className="text-sm text-slate-300 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

const AdminGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/*Header*/}
      <AdminHeader />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* 서브헤더 */}
        <div className="flex items-center mb-8">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
            <Book className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">관리자 가이드</h1>
            <p className="text-slate-300 mt-2">시스템 사용법 및 개발 가이드</p>
          </div>
        </div>

        {/* 가이드 섹션들 */}
        <div className="space-y-6">
          {/* 시스템 개요 */}
          <GuideSection title="개발 환경" icon={Code}>
            <div className="space-y-6">
              {/* 기술 스택 */}
              <div>
                <h4 className="font-semibold text-white mb-3">사용 기술 스택 - 프론트와 백엔드 모두 Render.com에 배포되어 있습니다.</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Frontend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Next.js 13 (App Router)</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Zustand (Auth Store)</li>
                      <li>• Axios / SWR</li>
                      <li>• Lucide React Icons</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Backend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Django 4.x + Django REST Framework</li>
                      <li>• PostgreSQL</li>
                      <li>• Docker / docker-compose</li>
                      <li>• Google Analytics Data API</li>
                      <li>• 서비스 계정 기반 인증</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 프로젝트 구조 */}
              <div>
                <h4 className="font-semibold text-white mb-3">프론트엔드 폴더 구조</h4>
                <CodeBlock title="suman 프로젝트 구조" language="bash">
          {`suman/
          ├── public/
          ├── src/
          │   ├── components/         # 공통 UI 컴포넌트
          │   ├── data/               # 정적 텍스트, 번역 데이터, 슬로건, 연혁 등
          │   ├── lib/                # axios 인스턴스 등 API 모듈
          │   ├── pages/              # Next.js 라우팅 페이지
          │   │   ├── admin/          # 관리자 페이지 (dashboard, faq, recruit 등)
          │   │   └── company/        # 회사소개 하위 페이지
          │   ├── stores/             # zustand 상태 관리 (auth 등)
          │   └── styles/             # Tailwind 기반 CSS 설정
          ├── next.config.js
          ├── tsconfig.json
          └── package.json`}
                </CodeBlock>
              </div>

              {/* 개발 조건 */}
              <div>
                <h4 className="font-semibold text-white mb-3">개발 및 빌드 환경</h4>
                <div className="bg-slate-800/50 rounded-lg p-4 text-sm text-slate-300 space-y-2">
                  <p>• Node.js v18 이상 권장</p>
                  <p>• VSCODE IDE에서 `npm install` 또는 `pnpm install` 후 개발 가능</p>
                  <p>• 로컬에서 `npm run dev` 실행 시 <code>localhost:3000</code>에서 작동</p>
                  <p>• 정적 빌드는 <code>npm run build</code></p>
                </div>
              </div>

              {/* 주의 사항 */}
              <div>
                <h4 className="font-semibold text-white mb-3">주의사항</h4>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li><strong>임의 수정금지</strong>: `/src/pages`에 있는 폴더의 코드를 임의로 수정하시면 배포시 문제가 발생할 수 있습니다.</li>
                  <li><strong>정적 텍스트 수정</strong>: 슬로건/인재상/연혁 등은 백엔드가 아닌 `/data` 파일에서 수정해야 반영됩니다.</li>
                  <li><strong>관리자 인증</strong>: JWT 토큰 + localStorage 기반이며 `zustand`로 관리됩니다. 임의 수정 금지</li>
                  <li><strong>빌드 오류</strong>: TypeScript 문법 에러가 발생하면 배포 실패할 수 있으므로 사전 확인 필수</li>
                </ul>
              </div>
            </div>
          </GuideSection>


          {/* 메뉴 구조 */}
          <GuideSection title="코드 수정" icon={FileText}>
            <div className="space-y-4">
              <p>
                기본적인 문구, 이미지, 슬로건, 인재상 등 한/영 문구 수정은
                <code className="text-blue-400">/data</code> 폴더 내의 정적 TypeScript 파일을 통해 관리됩니다. <br />반드시 이곳에서만 문구를 수정해주세요.
                <code className="text-blue-400">/pages</code> 내부 폴더에서 임의로 수정하시면 배포가 불가능해질 수도 있습니다.<br />
              </p>

              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                <p className="text-slate-300">예시:</p>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li><code>/data/home.ts</code> - 메인 페이지 텍스트 (한/영 다국어 지원)</li>
                  <li><code>/data/philosophy.ts</code> - 인재상 및 핵심 가치</li>
                  <li><code>/data/history.ts</code> - 회사 연혁</li>
                  <li><code>/data/faq.ts</code> - FAQ 데이터</li>
                </ul>
              </div>

              <CodeBlock title="문구 수정 예시" language="ts">
          {`// /data/home.ts
          export const homeContent = {
            kor: {
              slogan: "정밀한 기술이 만드는 내일의 기업",
              description: "혁신적인 솔루션과 최적의 서비스를 제조합니다.",
            },
            eng: {
              slogan: "Tomorrow's enterprise built with precision",
              description: "We deliver innovative solutions and optimized service.",
            }
          };`}
              </CodeBlock>

              <p className="text-sm text-slate-400">
                ⚠ 변경 시에는 <strong>TypeScript 문법 오류</strong>가 나지 않도록 유의해 주세요.
              </p>
            </div>
          </GuideSection>

          {/* 기능 사용법 */}
          <GuideSection title="CI/CD 및 배포 구조" icon={Globe}>
            <div className="space-y-4">
              <p>
                이 프로젝트는 <strong>GitHub Organization</strong> 저장소에 등록되어 있으며,
                <strong> Render</strong> 플랫폼을 통해 자동 배포됩니다.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2 text-slate-300 text-sm">
                <p>🛠 <strong>배포 구조:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>프론트: Render의 static site (Next.js 빌드 결과물)</li>
                  <li>백엔드: Render의 web service (Django + PostgreSQL)</li>
                  <li>CI/CD: 소스코드 수정후 Push하면 GitHub Organization를 통한 자동 빌드 + 배포</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2 text-slate-300 text-sm">
                <p>🛠 <strong>Render 내부 설정 정보</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>현재 프론트와 백엔드는 각각 다른 Render 계정에서 실행중입니다.</li>
                  <li>프론트와 백엔드 소스코드는 GitHub주소를 통해 연결되어 있습니다. 주소는 다음과 같습니다: https://github.com/BLUEMOON-SUMAN</li>
                  <li>현재 커스텀도메인 www.suman.co.kr를 사용중입니다.</li>
                </ul>
              </div>
              

              <p className="text-sm text-slate-400">
                ⚠️ 자세한 Render 환경 설정은 하단 가이드를 참고해주세요.
              </p>
            </div>
          </GuideSection>

          {/* 백엔드 가이드 */}
          <GuideSection title="Render 백엔드 가이드" icon={Code}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">백엔드 소스코드 및 DB 배포 방법입니다.</h4>
                <p className="mb-4">
                  
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">초기설정</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>1. Render 가입/로그인 후 새로운 프로젝트 생성</li>
                      <li>2. 새로 만든 프로젝트에서 Create new Service에서 Web Services 생성</li>
                      <li>3. Connect Git provider에서 Github에서 해당 프로젝트 가져오기</li>
                      <li>4. Source Code설정 후 Web Service Name 설정</li>
                      <li>5. Language는 Docker로 설정(Docker환경에서 개발)</li>
                      <li>6. Branch는 master로 맞춤(깃허브에 올라와있는 branch로 맞춤)</li>
                      <li>7. Region는 Singapore로 설정(한국 기준 제일 가까운 나라로 설정)</li>
                      <li>8. Root Directory는 suman_pj_back 입력</li>
                      <li>9. 가격 플랜은 Free로 설정</li>
                      <li>10. Environment Variables 입력(NAME_OF_VARIABLE / value) → 일단 비워둠( 나중에 Render Postgres생성 후 Key,value 값 추가해야함.)</li>
                      <li>11. Advanced →</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Secret Files 따로 건드리지 않음.</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Health Check Path : /health 입력</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Registry Credential : No credential</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Docker Build Context Directory : suman_pj_back/ . 그대로놔둠</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Dockerfile Path : ./Dockerfile입력 (suman_pj_back/ ./Dockerfile 형태)</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Docker Command : 비워둠</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Pre-Deploy Command : 비워둠</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Auto-Deploy : On Commit</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Build Filters : 건드리지않음.</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - Deploy Web Service 버튼 클릭</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp; - (Web service 배포 완료)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Render 데이터 베이스 배포</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>1. 왼쪽 위에서 +New에서 Postgres 클릭</li>
                      <li>2. Name은 Render에서 사용할 데이터베이스 이름으로 (실제 데이터베이스의 이름이랑은 다름 [DB_NAME]) Project는 아까 만든 Project로 설정</li>
                      <li>3. Database ← 여기에 실제 사용할 Database 이름 등록</li>
                      <li>4. USER ← USER명 지정</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp;⇒ Database와 USER는 여기서 지정해줘도 Render에서 배포 후 따로 지정해줌.</li>
                      <li>5. <strong>PostgreSQL Version은 14로 설정</strong></li>
                      <li>6. <strong>Datadog API Key는 비워둠</strong></li>
                      <li>7. <strong>Datadog Region는 US1(default)</strong></li>
                      <li>8. 가격은 Free → 이후에 만든 Web service의 Environment에 DB 정보 추가</li>
                      <li>9. Web service 들어가서 Environment 들어감.</li>
                      <li>10. Environment Variables에서 New variable 클릭</li>
                      <li>11. Key값에 아까 만든 Render Postgres에서 Connections 쪽의 정보들 입력</li>
                      <li>12. <strong>Hostname, Port, Database, Username, Password 입력 후</strong></li>
                      <li>13. DJANGO_SUPERUSER_EMAIL / <a href="mailto:sumanadmin@suman.kr">sumanadmin@suman.kr</a></li>
                      <li>14. DJANGO_SUPERUSER_PASSWORD / suman1324</li>
                      <li>15. DJANGO_SUPERUSER_USERNAME / sumanadmin</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp;→ Password, username는 관리자 계정 아이디와 비번</li>
                      <li>16. GA_PROPERTY_ID와 GOOGLE_ANALYTICS_SERVICE_ACCOUNT_KEY 입력</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp;→ Save, rebuild, and deploy 클릭</li>
                      <li>17. 배포 후 배포 로그 확인 → Web service에서 Events에서 확인가능</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Render 데이터베이스 PostgreSQL 관리 플랫폼 연결(pgAdmin4)</h5>
                    <ul>
                      <li>1. pgAdmin4 설치 (<a href="https://www.pgadmin.org/download/pgadmin-4-windows/" target="_blank">https://www.pgadmin.org/download/pgadmin-4-windows/</a>)</li>
                      <li>2. 위 링크에서</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp;• <a href="https://www.postgresql.org/ftp/pgadmin/pgadmin4/v9.6/windows/" target="_blank">pgAdmin 4 v9.6</a> (released July 25, 2025) 클릭 후</li>
                      <li>&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v9.6/windows/pgadmin4-9.6-x64.exe" target="_blank">pgadmin4-9.6-x64.exe</a> 설치</strong></li>

                      <li>3. pgAdmin4 들어간 후 Server 우클릭 → Register → Server 클릭</li>
                      <li>4. Name: 서버 이름 지정 (예: Render_Suman_DB)</li>
                      <li>5. Connection 클릭 후 Host name/address: 아까 만든 Render Postgres에서 <strong>External Database URL에서 Hostname 부분부터 ~ render.com까지</strong> 복사 (Ctrl+C → Ctrl+V)</li>
                      <li>6. Port: 5432</li>
                      <li>7. Maintenance database: Render Postgres에서 DB_NAME 가져옴</li>
                      <li>8. Username: Render Postgres에서 DB_USER 가져옴</li>
                      <li>9. Password: Render Postgres에서 DB_PASSWORD 가져옴 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(Save password? <strong>on</strong>으로 지정하면 패스워드 저장, <strong>off</strong>로 하면 접속 시마다 패스워드 입력)</li>
                      <li>10. Parameters → SSL mode 항목의 Value를 <strong>require</strong>로 설정</li>
                      <li>11. SAVE 클릭 후 데이터베이스 잘 들어왔는지 확인</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* 프론트 배포 가이드 */}
          <GuideSection title="Render 프론트 가이드" icon={Code}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">프론트 배포가이드입니다.</h4>
                <p className="mb-4">
                  백엔드를 배포했던 Render 계정을 동일하게 사용하셔도 되며, 계정을 분리해도 상관 없습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">초기설정</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>1. https://render.com 에 접속 후 로그인하거나 회원가입합니다.</li>
                      <li>2. Render 대시보드 → New 버튼 → Static Site 선택(web service로 하시면 안됩니다!)</li>
                      <li>3. GitHub 계정을 연동한 후 배포할 저장소(suman_project_FE)를 선택합니다.</li>
                      <li>4. Name	suman-fe (원하는 이름) / Branch	main 또는 production / Build Command	npm run build / Publish Directory:	out 으로 설정해주세요.</li>
                      <li>5. 환경변수 등록: 현재 우리 홈페이지는 KAKAO MAP API를 사용중입니다. 카카오맵 홈페이지에서 API키를 발급받으신 후, NEXT_PUBLIC_KAKAO_MAP_APP_KEY로 등록해주시면 됩니다.</li>
                      <li>6. GitHub 저장소에 push가 일어날 때마다 자동으로 재빌드 및 재배포됩니다. 필요 시 Render의 “Manual Deploy” 버튼으로 수동 배포도 가능합니다.</li>
                      <li>7. 초기 배포가 완료되면 초기 도메인이 suman-fe.onrender.com처럼 임의로 생성됩니다. 따라서 커스텀 도메인을 연결해줘야합니다. Settings에서 Custom Domains 에서 도메인 등록 + DNS 설정</li>
                      <li>8. 가비아 사이트에 들어가셔서 A레코드와 CNAME을 배포된 주소로 변경해주세요.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">초기 설정 이후 프론트 요청 API 변경</h5>
                      <p className="mb-4">
                        새롭게 백엔드 배포와 프론트 배포가 완료되면, API요청을 보낼 주소를 변경해주셔야 합니다.
                      </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>1. 프론트 소스코드를 고칠 수 있는 IDE를 열어주세요.</li>
                      <li>2. 수정할 파일의 위치는 다음과 같습니다: suman_project_FE/src/lib/api/publicInstance & privateInstance</li>
                      <li>3. 두개의 api파일에서 baseURL: 이후에 주소가 적혀있는 코드를 벡엔드 render 주소로 변경해주셔야 합니다.</li>
                      <li>4. 주소예시는 다음과 같습니다: https://Your_render_url/api/</li>
                      <li>5. 주의사항: 반드시 주소이후에 <strong>/api/</strong> 까지 붙여주셔야 합니다.</li>
                      <li>6. 변경 후 git Organization에 저장되면 자동으로 재배포됩니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* API 문서 */}
          <GuideSection title="API 문서" icon={Database}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">API 엔드포인트</h4>
                <p className="mb-4">
                  관리자 페이지에서 사용하는 주요 API 엔드포인트들입니다.
                  모든 API는 RESTful 규칙을 따르며 JSON 형식으로 데이터를 교환합니다.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">FAQ 관리 API</h5>
                    <CodeBlock title="FAQ API 예시" language="javascript">
{`// FAQ 목록 조회
GET /api/admin/faqs

// FAQ 등록
POST /api/admin/faqs
{
  "category": "카테고리",
  "question": "질문",
  "answer": "답변",
  "is_published": true
}

// FAQ 수정
PUT /api/admin/faqs/:id
{
  "category": "수정된 카테고리",
  "question": "수정된 질문",
  "answer": "수정된 답변",
  "is_published": false
}

// FAQ 삭제
DELETE /api/admin/faqs/:id`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">사용자 관리 API</h5>
                    <CodeBlock title="User API 예시" language="javascript">
{`// 사용자 목록 조회
GET /api/admin/users

// 사용자 정보 수정
PUT /api/admin/users/:id
{
  "name": "이름",
  "email": "이메일",
  "role": "권한",
  "status": "활성화"
}

// 사용자 삭제
DELETE /api/admin/users/:id`}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* 추가 정보 */}
          <GuideSection title="추가 정보" icon={FileText}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-3">업데이트 내역</h4>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-white">v1.0.0 (2025.07.31)</p>
                        <p className="text-sm text-slate-300">개발 완료 및 배포 완료</p>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">문의 및 지원</h4>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-slate-300 mb-2">
                    시스템 사용 중 문제가 발생한 경우 
                    개발팀으로 문의해 주세요.
                  </p>
                  <div className="text-sm text-slate-400">
                    <p>• 이메일: mstoto0319@gmail.com (장민성)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Credits</h4>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-slate-300 mb-2">
                    Developed by
                  </p>
                  <div className="text-sm text-slate-400">
                    <p>• 양재훈(호서대): Leader, FE-Design</p>
                    <p>• 장민성(단국대): PM, Full-stack</p>
                    <p>• 최하연(상명대): FE-Design</p>
                    <p>• 이강연(상명대): FE-Design</p>
                    <p>• 서강찬(상명대): BE</p>
                    <p>• 이승원(상명대): BE</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>
      </div>
    </div>
  );
};

export default withAdminAuth(AdminGuidePage);