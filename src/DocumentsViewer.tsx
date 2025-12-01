import React, { useState } from 'react';

interface BusinessProfile {
  businessName: string;
  crNumber: string;
  crDocument?: string;
  bankIban: string;
  ibanDocument?: string;
}

interface User {
  businessProfile: BusinessProfile;
}

export default function DocumentsViewer() {
  const [viewingDocsUser, setViewingDocsUser] = useState<User | null>(null);

  // Helper to open modal for demo purposes
  const openDemo = () => {
    setViewingDocsUser({
      businessProfile: {
        businessName: "Demo Business",
        crNumber: "1010101010",
        bankIban: "SA0000000000000000000000",
        crDocument: "", 
        ibanDocument: ""
      }
    });
  };

  return (
    <div className="p-4">
      {!viewingDocsUser && (
        <button 
          onClick={openDemo}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Open Document Viewer
        </button>
      )}

      {viewingDocsUser && viewingDocsUser.businessProfile && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden animate-bounce-in">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                    <div>
                        <h3 className="font-bold text-xl text-gray-800">وثائق {viewingDocsUser.businessProfile.businessName}</h3>
                        <p className="text-xs text-gray-500 mt-1">مراجعة المستندات الرسمية</p>
                    </div>
                    <button onClick={() => setViewingDocsUser(null)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                        <i className="fas fa-times text-gray-600"></i>
                    </button>
                </div>
                
                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-100 space-y-8">
                    {/* CR Document Section */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-3 bg-blue-50 border-b border-blue-100 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-file-contract text-blue-600"></i>
                                <span className="font-bold text-blue-900">السجل التجاري / وثيقة العمل الحر</span>
                            </div>
                            <div className="text-xs font-mono bg-white px-2 py-1 rounded border border-blue-100">
                                {viewingDocsUser.businessProfile.crNumber || 'لا يوجد رقم'}
                            </div>
                        </div>
                        <div className="relative w-full h-[600px] bg-gray-200 group">
                            {viewingDocsUser.businessProfile.crDocument ? (
                                <iframe 
                                    src={viewingDocsUser.businessProfile.crDocument} 
                                    className="w-full h-full border-0" 
                                    title="CR Document"
                                ></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 flex-col">
                                    <i className="fas fa-file-slash text-4xl mb-2"></i>
                                    <span>لا يوجد ملف مرفق</span>
                                </div>
                            )}
                            {viewingDocsUser.businessProfile.crDocument && (
                                <a 
                                    href={viewingDocsUser.businessProfile.crDocument} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded shadow-md text-xs font-bold border flex items-center gap-2 z-10 opacity-75 group-hover:opacity-100 transition"
                                >
                                    <i className="fas fa-external-link-alt text-blue-600"></i> فتح في نافذة جديدة
                                </a>
                            )}
                        </div>
                    </div>

                    {/* IBAN Document Section */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-3 bg-purple-50 border-b border-purple-100 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-university text-purple-600"></i>
                                <span className="font-bold text-purple-900">شهادة الآيبان البنكي</span>
                            </div>
                            <div className="text-xs font-mono bg-white px-2 py-1 rounded border border-purple-100" dir="ltr">
                                {viewingDocsUser.businessProfile.bankIban || 'No IBAN'}
                            </div>
                        </div>
                        <div className="relative w-full h-[600px] bg-gray-200 group">
                            {viewingDocsUser.businessProfile.ibanDocument ? (
                                <iframe 
                                    src={viewingDocsUser.businessProfile.ibanDocument} 
                                    className="w-full h-full border-0" 
                                    title="IBAN Document"
                                ></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 flex-col">
                                    <i className="fas fa-file-slash text-4xl mb-2"></i>
                                    <span>لا يوجد ملف مرفق</span>
                                </div>
                            )}
                            {viewingDocsUser.businessProfile.ibanDocument && (
                                <a 
                                    href={viewingDocsUser.businessProfile.ibanDocument} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded shadow-md text-xs font-bold border flex items-center gap-2 z-10 opacity-75 group-hover:opacity-100 transition"
                                >
                                    <i className="fas fa-external-link-alt text-purple-600"></i> فتح في نافذة جديدة
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
                    <button onClick={() => setViewingDocsUser(null)} className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-bold transition shadow-sm">إغلاق</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}