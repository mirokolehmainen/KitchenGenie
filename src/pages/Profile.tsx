import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file for styling
import Menu from '../components/Menu';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton } from '@ionic/react';

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the updated profile information
    // You can make an API call here to update the user's profile
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Bio:', bio);

    // Change password logic
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
  };

  return (
    <IonPage id="main-content">
      <Menu />
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Kitchen Genie</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="profile-container">
          <h1>Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea id="bio" value={bio} onChange={handleBioChange} />
            </div>
            <hr />
            <h2>Change Password</h2>
            <div className="form-group">
              <label htmlFor="current-password">Current Password:</label>
              <input
                type="password"
                id="current-password"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password:</label>
              <input type="password" id="new-password" value={newPassword} onChange={handleNewPasswordChange} />
            </div>
            <IonButton type="submit" expand="full" className="save-button">
              Save
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;