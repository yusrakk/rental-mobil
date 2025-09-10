import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { RentalMobil } from '@/models/RentalMobil';

const rentalService = new RentalMobil();

// GET - Mengambil semua data rental
export async function GET() {
  try {
    const rentals = await prisma.biayaRental.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      success: true,
      data: rentals
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error fetching rental data',
      error: error.message
    }, { status: 500 });
  }
}

// POST - Menambah data rental baru
export async function POST(request) {
  try {
    const { namaPenyewa, namaMobil, lamaSewa, extraHour = 0 } = await request.json();

    // Validasi input
    if (!namaPenyewa || !namaMobil || !lamaSewa) {
      return NextResponse.json({
        success: false,
        message: 'Data tidak lengkap'
      }, { status: 400 });
    }

    // Hitung biaya rental
    const calculation = rentalService.hitungBiayaRental(
      namaPenyewa,
      namaMobil,
      parseInt(lamaSewa),
      parseInt(extraHour) || 0
    );

    // Simpan ke database
    const rental = await prisma.biayaRental.create({
      data: {
        namaPenyewa: calculation.namaPenyewa,
        namaMobil: calculation.namaMobil,
        program: calculation.program,
        biayaPerHari: calculation.biayaPerHari,
        lamaSewa: calculation.lamaSewa,
        extraHour: calculation.extraHour,
        biayaRental: calculation.biayaRental,
        totalBiaya: calculation.totalBiaya
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Data rental berhasil disimpan',
      data: rental,
      calculation
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error saving rental data',
      error: error.message
    }, { status: 500 });
  }
}

// PUT - Update data rental
export async function PUT(request) {
  try {
    const { id, namaPenyewa, namaMobil, lamaSewa, extraHour = 0 } = await request.json();

    // Validasi input
    if (!id || !namaPenyewa || !namaMobil || !lamaSewa) {
      return NextResponse.json({
        success: false,
        message: 'Data tidak lengkap atau ID tidak valid'
      }, { status: 400 });
    }

    // Hitung ulang biaya rental
    const calculation = rentalService.hitungBiayaRental(
      namaPenyewa,
      namaMobil,
      parseInt(lamaSewa),
      parseInt(extraHour) || 0
    );

    // Update data di database
    const rental = await prisma.biayaRental.update({
      where: { id: parseInt(id) },
      data: {
        namaPenyewa: calculation.namaPenyewa,
        namaMobil: calculation.namaMobil,
        program: calculation.program,
        biayaPerHari: calculation.biayaPerHari,
        lamaSewa: calculation.lamaSewa,
        extraHour: calculation.extraHour,
        biayaRental: calculation.biayaRental,
        totalBiaya: calculation.totalBiaya
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Data rental berhasil diupdate',
      data: rental,
      calculation
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error updating rental data',
      error: error.message
    }, { status: 500 });
  }
}

// DELETE - Hapus data rental
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({
        success: false,
        message: 'ID tidak valid'
      }, { status: 400 });
    }

    // Hapus data dari database
    await prisma.biayaRental.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({
      success: true,
      message: 'Data rental berhasil dihapus'
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error deleting rental data',
      error: error.message
    }, { status: 500 });
  }
}
