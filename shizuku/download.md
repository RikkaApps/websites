# Download

[Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)

[GitHub Release](https://github.com/RikkaApps/Shizuku/releases)

[IzzyOnDroid F-Droid Repository](https://apt.izzysoft.de/fdroid/index/apk/moe.shizuku.privileged.api)
import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';
import 'package:flutter_sound/flutter_sound.dart'; // রেকর্ডিংয়ের জন্য প্যাকেজ
import 'dart:io';

void main() {
  runApp(const HarmoniumApp());
}

class HarmoniumApp extends StatelessWidget {
  const HarmoniumApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '54 Key Harmonium',
      theme: ThemeData.dark(),
      home: const HarmoniumScreen(),
    );
  }
}

class HarmoniumScreen extends StatefulWidget {
  const HarmoniumScreen({super.key});

  @override
  State<HarmoniumScreen> createState() => _HarmoniumScreenState();
}

class _HarmoniumScreenState extends State<HarmoniumScreen> {
  final AudioPlayer player = AudioPlayer();
  final FlutterSoundRecorder recorder = FlutterSoundRecorder();
  bool isRecording = false;

  final List<String> notes = List.generate(
    54,
    (index) => 'note${index + 1}',
  );

  Future<void> playNote(String note) async {
    await player.play(
      AssetSource('notes/$note.mp3'),
    );
  }

  Future<void> startRecording() async {
    // রেকর্ডিং শুরু করার লজিক
    final directory = await getApplicationDocumentsDirectory();
    String path = '${directory.path}/harmonium_record.aac';
    await recorder.startRecorder(toFile: path);
    setState(() {
      isRecording = true;
    });
  }

  Future<void> stopRecording() async {
    String? path = await recorder.stopRecorder();
    setState(() {
      isRecording = false;
    });
    if (path != null) {
      // রেকর্ডিং ফাইল প্লে বা সংরক্ষণের লজিক এখানে যোগ করুন
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF8B5A2B),
      appBar: AppBar(
        title: const Text("Professional Harmonium"),
        backgroundColor: Colors.brown,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(10),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: notes.map((note) => buildKey(note)).toList(),
              ),
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: isRecording ? stopRecording : startRecording,
            child: Text(isRecording ? "Stop Recording" : "Start Recording"),
          ),
        ],
      ),
    );
  }

  Widget buildKey(String note) {
    return GestureDetector(
      onTap: () => playNote(note),
      child: Container(
        width: 70,
        margin: const EdgeInsets.symmetric(horizontal: 2),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: Colors.black),
          borderRadius: BorderRadius.circular(4),
        ),
        child: Align(
          alignment: Alignment.bottomCenter,
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Text(
              note,
              style: const TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
