import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .home-section {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .bg, .trees {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .trees {
          z-index: 100;
        }

        .girl {
          position: absolute;
          scale: 0.65;
          bottom: -10%;
          animation: animateGirl 20s linear infinite;
          z-index: 50;
        }

        @keyframes animateGirl {
          0% { transform: translateX(100vw); }
          50% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw) rotateY(180deg); }
        }

        .leaves {
          z-index: 90;
        }

        .leaves .set div {
          position: absolute;
          animation: fall 10s linear infinite;
        }

        @keyframes fall {
          0% { top: -10%; opacity: 0; }
          100% { top: 110%; opacity: 1; }
        }

        .content-wrapper {
          position: relative;
          z-index: 150;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          padding: 40px;
          width: 100%;
          max-width: 1200px;
        }

        .header {
          text-align: center;
          animation: fadeInDown 1s ease-out;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .header h1 {
          font-size: 3.5em;
          color: #fff;
          text-shadow: 2px 2px 15px rgba(0,0,0,0.6);
          margin-bottom: 15px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .header p {
          font-size: 1.25em;
          color: #f1f1f1;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.6);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cards-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          width: 100%;
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 45px 35px;
          width: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.25);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
          color: white;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: 0.7s;
        }

        .feature-card:hover::before {
          left: 200%;
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.02);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .feature-card .icon-placeholder {
          width: 85px;
          height: 85px;
          background: rgba(143, 44, 36, 0.85);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5em;
          box-shadow: 0 10px 25px rgba(143,44,36,0.5);
          transition: 0.4s ease;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .feature-card:hover .icon-placeholder {
          background: #d64c42;
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 15px 30px rgba(214,76,66,0.6);
        }

        .feature-card h3 {
          font-size: 1.7em;
          color: #fff;
          font-weight: 600;
          text-shadow: 1px 1px 8px rgba(0,0,0,0.4);
          letter-spacing: 0.5px;
        }

        .feature-card p {
          font-size: 1em;
          color: #f8f8f8;
          line-height: 1.6;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
          
        .nav-link {
          margin-top: 15px;
          padding: 12px 30px;
          background: #8f2c24;
          color: #fff;
          border-radius: 30px;
          font-weight: 600;
          letter-spacing: 1px;
          text-decoration: none;
          transition: 0.3s;
          display: inline-block;
          box-shadow: 0 5px 15px rgba(143, 44, 36, 0.4);
        }
        
        .feature-card:hover .nav-link {
          background: #d64c42;
          box-shadow: 0 8px 20px rgba(214, 76, 66, 0.5);
          transform: translateY(-2px);
        }
          
        @media (max-width: 900px) {
          .header h1 {
            font-size: 2.8em;
          }
          .cards-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <section className="home-section">
        <div className="leaves">
          <div className="set">
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{ 
                left: `${i * 8.5}%`, 
                animationDuration: `${8 + (i % 5)}s`,
                animationDelay: `${(i % 4)}s` 
              }}>
                <img
                  src={`/images/leaf_0${(i % 4) + 1}.png`}
                  alt=""
                  width={30 + (i % 3) * 12}
                />
              </div>
            ))}
          </div>
        </div>

        <img src="/images/bg.jpg" className="bg" alt="" />
        <img src="/images/girl.png" className="girl" alt="" />
        {/* The trees should overlay everything else in the background style */}
        <img src="/images/trees.png" className="trees" alt="" />

        <div className="content-wrapper">
          <div className="header">
            <h1>JUIT Placement Portal</h1>
            <p>Your core destination for placement insights, company profiles, and interview preparation. Discover the opportunities that await.</p>
          </div>

          <div className="cards-container">
            <Link to="/company" className="feature-card">
              <div className="icon-placeholder">🏢</div>
              <h3>Explore Companies</h3>
              <p>Discover comprehensive profiles of prestigious companies visiting our campus for recruitment drives.</p>
              <span className="nav-link">View Companies</span>
            </Link>

            <Link to="/company-question" className="feature-card">
              <div className="icon-placeholder">📝</div>
              <h3>Interview Questions</h3>
              <p>Prepare effectively with authentic technical and HR questions asked by top recruiters.</p>
              <span className="nav-link">Practice Now</span>
            </Link>

            <Link to="/company-analytics" className="feature-card">
              <div className="icon-placeholder">📊</div>
              <h3>Placement Analytics</h3>
              <p>Dive deep into placement statistics, hiring trends, and package details across departments.</p>
              <span className="nav-link">See Analytics</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
