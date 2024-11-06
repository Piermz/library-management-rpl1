<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $table = 'books';
    protected $fillable = ['judul_buku', 'pengarang', 'penerbit', 'deskripsi'];
}
