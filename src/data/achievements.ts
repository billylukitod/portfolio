export interface Achievement {
  title: string;
  event?: string;
  year: string;
  description: string;
  type: 'competition' | 'academic' | 'certification' | 'other';
  certificateUrl?: string;
}

export const achievements: Achievement[] = [
  {
    title: '2nd Place',
    event: 'Singapore Amazing Flying Machine Competition 2025',
    year: 'Mar 2025',
    description:
      'Associated with CAKSA TEAM. Issued by DSO National Laboratories and Science Centre Singapore, in collaboration with the Ministry of Defence.',
    type: 'competition',
    certificateUrl: '/media/certificates/SAFMC 2025.pdf',
  },
  {
    title: 'Semi-Finalist',
    event: 'Singapore Amazing Flying Machine Competition 2024',
    year: 'Mar 2024',
    description:
      'Associated with CAKSA TEAM. Issued by DSO National Laboratories and Science Centre Singapore, in collaboration with the Ministry of Defence.',
    type: 'competition',
    certificateUrl: '/media/certificates/SAFMC 2024.pdf',
  },
  {
    title: 'Project Funding Grantee',
    event: 'Pekan Kreativitas Mahasiswa – Karsa Cipta 2025',
    year: 'Dec 2025',
    description:
      'Issued by Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional (Puspresnas) Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi Republik Indonesia.',
    type: 'academic',
    certificateUrl: '/media/certificates/PKM 2025.pdf',
  },
  {
    title: 'Project Funding Grantee',
    event: 'Pekan Kreativitas Mahasiswa – Karsa Cipta 2024',
    year: 'Dec 2024',
    description:
      'Issued by Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional (Puspresnas) Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi Republik Indonesia.',
    type: 'academic',
    certificateUrl: '/media/certificates/PKM 2024.pdf',
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Applied Engineering, Computer Engineering',
    institution: 'Politeknik Elektronika Negeri Surabaya',
    period: '2022 – 2026',
    description: 'Grade: 3.73 / 4.00',
  },
];
