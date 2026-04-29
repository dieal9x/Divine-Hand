import React, { useState } from 'react';
import { Upload, X, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function PhotoUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setUploadedPhotos(['mock-photo-1']);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Step 1: Upload Your Photos</h3>
        <span className="text-[10px] text-brand-ink/40 uppercase tracking-widest">{uploadedPhotos.length} / 12 selected</span>
      </div>

      <div 
        className={cn(
          "border-2 border-dashed border-brand-beige rounded-none p-12 transition-all cursor-pointer group hover:bg-brand-cream/30",
          uploadedPhotos.length > 0 && "border-brand-ink/10 bg-brand-cream/20"
        )}
        onClick={handleUpload}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {uploadedPhotos.length === 0 ? (
            <>
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {isUploading ? (
                  <div className="h-5 w-5 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Upload className="h-5 w-5 text-brand-gold" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-brand-ink">Drag & drop your photos here</p>
                <p className="text-xs text-brand-ink/40">or click to browse from your device</p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle2 className="h-10 w-10 text-brand-gold" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-brand-ink">Photos added successfully</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); setUploadedPhotos([]); }}
                  className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 hover:text-brand-ink transition-colors"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-[10px] text-brand-ink/40 italic text-center">Supported formats: JPG, PNG, HEIC. Max size 20MB.</p>
    </div>
  );
}
