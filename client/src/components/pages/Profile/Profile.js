import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [email, setEmail] = useState('user@example.com');
  const [editEmail, setEditEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleEditEmail = () => {
    setEditEmail(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditEmail(false);
  };

  const handleChangePassword = () => {
    setShowChangePasswordForm(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setShowChangePasswordForm(false);
  };

  return (
    <div className="profile-container">
      <h1>My Profile </h1>
      <p>Username: <strong>user123</strong></p>
      <div className="email-ctn">
        <p>Email: {editEmail ? (
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <strong>{email}</strong>
            <button onClick={handleEditEmail}>Edit</button>
          </>
        )}</p>
      </div>
      <div className="password-container">
        <button className="change-password-btn" onClick={handleChangePassword}>Change Password</button>
      </div>
      {showChangePasswordForm && (
        <form onSubmit={handlePasswordSubmit}>
          <div className="input-container">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              className="password-input"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
            />
          </div>
          <div className="input-container">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="password-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmNewPassword">Confirm New Password<br></br></label>
            <input
              type="password"
              id="confirmNewPassword"
              className="password-input"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div >
          <div className="input-container">
            <button type="submit" className="save-password-btn">
              Confirm
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Profile;
