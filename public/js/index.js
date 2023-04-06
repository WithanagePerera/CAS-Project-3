auth.onAuthStateChanged(user =>
    {
        if (user)
        {
            db.collection('admin').get().then(snapshot =>
            {
                var admin = false;
    
                snapshot.docs.forEach(doc =>
                {
                    if (user.uid === doc.id)
                    {
                        admin = true;
                    }
                })
    
                if (admin)
                {
                    location.href = 'pages/admin.html';
                }
                else
                {
                    location.href = 'pages/user.html';
                }
            })
        }
    })