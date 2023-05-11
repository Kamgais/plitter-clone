import React, { useCallback, useEffect, useState } from 'react'
import useCurrentUser from '../../hooks/useCurrentUser'
import useUser from '../../hooks/useUser';
import useEditModal from '../../hooks/useEditModal';
import {toast} from 'react-hot-toast'
import axios from 'axios'
import Modal from '../Modal';
import Input from '../Input';
import ImageUpload from '../ImageUpload';

const EditModal = () => {
    const  {data: currentUser} = useCurrentUser();
    const  {mutate: mutateFetchedUser} = useUser(currentUser?.id)
    const editModal = useEditModal();

    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');


    useEffect(() => {
      currentUser?.profileImage &&  setProfileImage(currentUser?.profileImage)
     currentUser?.coverImage &&   setCoverImage(currentUser?.coverImage)
        setName(currentUser?.name)
        setUsername(currentUser?.username)
    },[currentUser])

    const  [loading , setLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setLoading(true)
            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage,
                coverImage
            })
            mutateFetchedUser()
            toast.success('Updated')
            editModal.onClose();
            } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    },[bio, name, username, profileImage,coverImage, editModal, mutateFetchedUser])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <ImageUpload
            value={profileImage}
            disabled={loading}
            onChange={(image) => setProfileImage(image)}
            label='Upload profile image'
            />
            <ImageUpload
            value={coverImage}
            disabled={loading}
            onChange={(image) => setCoverImage(image)}
            label='Upload cover image'
            />
            <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} disabled={loading}/>
            <Input placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} disabled={loading}/>
            <Input placeholder='Bio' onChange={(e) => setBio(e.target.value)} value={bio} disabled={loading}/>

        </div>
    )
  return (
    <Modal
    disabled={loading}
    isOpen={editModal.isOpen}
    title='Edit your Profile'
    actionLabel='Save'
    onClose={editModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    />
  )
}

export default EditModal