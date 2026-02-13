# Images Folder

Folder ini digunakan untuk menyimpan foto dan aset gambar lainnya.
File yang disimpan di sini dapat diakses melalui URL `/images/nama-file.ext`.

Contoh:
Jika ada file `my-photo.jpg` di folder ini, kamu bisa menampilkannya dengan component Image:

```tsx
import Image from 'next/image';

<Image src="/images/my-photo.jpg" alt="My Photo" width={500} height={300} />
```
