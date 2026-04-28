import awsLogo from "@/assets/misc/aws.png"
function Certificates() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Certificates</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={awsLogo} alt="AWS Logo" className="small-img" />
        <h2>
          Amazon Web Services Cloud Practitioner
        </h2>
      </div>
      <div>
        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/74a0b2a15ce24a8783b6862209c3e350"
          target="_blank" className="cert">
          https://cp.certmetrics.com/amazon/en/public/verify/credential/74a0b2a15ce24a8783b6862209c3e350
        </a>
      </div>
      <div>
        <p>June 01, 2025 - June 01, 2028</p>
      </div>
    </div>
  )
}

export default Certificates