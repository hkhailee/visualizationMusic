
""" Core Feature extraction using machine learning using the pyAudioAnalysis library.
addtionally after creation, new song information is POSTed to the cloud data warehouse.

potentially each of these will be classified by genre or similar (since themes in songs
are not set to a single genre, it might start as gospel and go to rock or be lofi and move
to electric """

from git_pyaudio.pyAudioAnalysis import audioBasicIO
from git_pyaudio.pyAudioAnalysis import ShortTermFeatures
from pydub import AudioSegment
import matplotlib.pyplot as plt


[Fs, x] = audioBasicIO.read_audio_file("FeelingGood_muse.wav")


F, f_names = ShortTermFeatures.feature_extraction(x, Fs, 0.050*Fs, 0.025*Fs)
plt.subplot(2,1,1); plt.plot(F[0,:]); plt.xlabel('Frame no'); plt.ylabel(f_names[0]) 
plt.subplot(2,1,2); plt.plot(F[1,:]); plt.xlabel('Frame no'); plt.ylabel(f_names[1]); plt.show()

# =========== main command =================
#python git_pyaudio/pyAudioAnalysis/audioAnalysis.py featureExtractionFile -i fg_MB.wav -mw 1.0 -ms 1.0 -sw 0.050 -ss 0.050 -o fg_MB.wav