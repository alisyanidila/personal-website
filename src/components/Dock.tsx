import { Dock } from 'react-osx-dock';

const DockComponent = () => {
  const dockItems = [
    {
      id: 'profile',
      title: 'Profile',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMzQjgyRjYiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMjAgMjEtMTYgMGExIDEgMCAwIDEtMS0xdi0xYTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnYxYTEgMSAwIDAgMS0xIDF6Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPgo8L3N2Zz4KPC9zdmc+',
      onClick: () => console.log('Profile clicked'),
    },
    {
      id: 'projects',
      title: 'Projects',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cmVjdCB4PSIyIiB5PSIzIiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiByeT0iMiIvPgo8bGluZSB4MT0iOCIgeTE9IjIxIiB4Mj0iMTYiIHkyPSIyMSIvPgo8bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyIiB5Mj0iMjEiLz4KPC9zdmc+Cjwvc3ZnPg==',
      onClick: () => console.log('Projects clicked'),
    },
    {
      id: 'skills',
      title: 'Skills',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNGNTk0MDAiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cG9seWdvbiBwb2ludHM9IjEzLDIgMywxNCAyMSwxNCIvPgo8L3N2Zz4KPC9zdmc+',
      onClick: () => console.log('Skills clicked'),
    },
    {
      id: 'contact',
      title: 'Contact',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNFRjQ0NDQiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtNCAyfDggOG04LThMNCAxOCIvPgo8L3N2Zz4KPC9zdmc+',
      onClick: () => window.open('mailto:alisyaalidin@gmail.com'),
    },
    {
      id: 'github',
      title: 'GitHub',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMyNDI5MkUiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAuNUM1LjM3NC41IDAgNS44NzMgMCAxMi41MDJjMCA1LjMxMyAzLjQzOCA5LjggOC4yMDcgMTEuMzg2LjYuMTEuODI2LS4yNjIuODI2LS41ODIgMC0uMjg3LS4wMS0xLjA0LS4wMTYtMi4wNC0zLjMzOC43MjMtNC4wNDItMS42MTQtNC4wNDItMS42MTRDNC40MjIgMTguNzQgMy42MzMgMTguNDAzIDMuNjMzIDE4LjQwM2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE4LTEuMzA1Ljc2LTEuNjA0LTIuNjY1LS4zMDMtNS40NjctMS4zMzQtNS40NjctNS45MyAwLTEuMzEuNDY2LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5OC0uMDE1IDMuMjkzIDAgLjMxNS4yMS42OTYuODI1LjU3OCA0Ljc4MS0xLjU5OCA4LjIzNi02LjA3IDguMjM2LTExLjM4NkMyNCA1Ljg3MyAxOC42MjcuNSAxMiAuNXoiLz4KPC9zdmc+Cjwvc3ZnPg==',
      onClick: () => window.open('https://github.com/alisyanidila', '_blank'),
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMwMDc3QjUiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTE5LTIuMDY0IDIuMDYzLTIuMDY0IDEuMTQzIDAgMi4wNjQuOTI2IDIuMDY0IDIuMDY0IDAgMS4xMzktLjkyMSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjlIMy4xMTl2MTEuNDUyeiIvPgo8L3N2Zz4KPC9zdmc+',
      onClick: () => window.open('https://linkedin.com/in/nidilalisya', '_blank'),
    },
    {
      id: 'resume',
      title: 'Resume',
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiM3QzNBRUQiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTQgMlY4YTEgMSAwIDAgMCAxIDFoNiIvPgo8cGF0aCBkPSJNNCAydjIwYTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMVY5cy0uMDA5LS4wMDktLjQyNC0uNDI0Qy0uNDI0IDguNTkxIDQgOC41ODMgOSA4LjU3OEg0WjEwIDJaIi8+Cjwvc3ZnPgo8L3N2Zz4=',
      onClick: () => {
        const link = document.createElement('a');
        link.href = '/resume/Alisya_Nidila_Resume.pdf';
        link.download = 'Alisya_Nidila_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-4">
      <div className="flex justify-center">
        <Dock
          itemWidth={64}
          magnification={1.5}
          magnifyDirection="up"
          className="backdrop-blur-xl border border-white/20 rounded-2xl px-3 py-2 shadow-2xl"
        >
          {dockItems.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.title}
              title={item.title}
              onClick={item.onClick}
              className="cursor-pointer rounded-lg"
              style={{ width: '64px', height: '64px' }}
            />
          ))}
        </Dock>
      </div>
    </div>
  );
};

export default DockComponent;
